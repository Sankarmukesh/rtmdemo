import uuid
from datetime import date

from api.helpers import getSingleRecordResult, executeDML
from config import settings
# import logging

# logger = logging.getLogger(__name__)


def update_user(user_identity):
    try:
        user_email = user_identity[settings.SAML2_AUTH.get('ATTRIBUTES_MAP', {}).get('email', 'Email')][0]
        user_first_name = user_identity[settings.SAML2_AUTH.get('ATTRIBUTES_MAP', {}).get('first_name', 'FirstName')][0]
        user_last_name = user_identity[settings.SAML2_AUTH.get('ATTRIBUTES_MAP', {}).get('last_name', 'LastName')][0]
        print('user_email: ', user_email)
        print('user_first_name: ', user_first_name)
        print('user_last_name: ', user_last_name)
        user = getSingleRecordResult('SELECT * FROM AUTH_USER WHERE username = ?', (user_email))
        print('user: ', user)
        if user == None:
            executeDML('INSERT INTO AUTH_USER(username, password, first_name, '
                       'last_name, email, is_staff, is_active, date_joined, is_superuser) '
                       'VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?)', (user_email, uuid.uuid1(), user_first_name,
                                                             user_last_name, user_email, 0, 1, date.today(), 0))
    except Exception as error:
        print(error, 'service.py')