# RTM Fast tool
## Frontend
Frontend is developed with Angular technology. Follow the below steps to run the frontend application.
- Go to `frontend` folder
- Execute `npm install` for compile
- Execute `npm start` for start the application

## Backend
Backend is developed with Django Rest Framework and database used MS SQL Server. Follow the below steps to run the backend application.
- Go to `db_dump` folder to get the sql server dump and import the dump using sql server management studio
- Go to `backend` folder
- Enter `pip install -r requirements.txt` in command line for install required packages
- Change database configuration in backend/src/settings.py file.
- Run the application using `python manage.py runserver`.


