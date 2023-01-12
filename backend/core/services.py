def update_user(user_identity):
    try:
        print('USER IDENTITY', user_identity)
        user_email = user_identity[settings.SAML2_AUTH.get('ATTRIBUTES_MAP', {}).get('email', 'Email')][0]
        user_first_name = user_identity[settings.SAML2_AUTH.get('ATTRIBUTES_MAP', {}).get('first_name', 'FirstName')][0]
        user_last_name = user_identity[settings.SAML2_AUTH.get('ATTRIBUTES_MAP', {}).get('last_name', 'LastName')][0]

        user = getSingleRecordResult('SELECT * FROM AUTH_USER WHERE username = ?', (user_email))
        print(user, 'Service.py 18')
        if user == None:
            print(user, 'Service.py 21 Update_user')
            executeDML('INSERT INTO AUTH_USER(username, password, first_name, '
                       'last_name, email, is_staff, is_active, date_joined, is_superuser) '
                       'VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?)', (user_email, uuid.uuid1(), user_first_name,
                                                             user_last_name, user_email, 0, 1, date.today(), 0))
    except Exception as error:
        print(error, 'service.py 27')
