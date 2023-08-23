

1. Копируем репозиторий 
git clone
2. Создаем виртуальное окружение 
python -m venv venv
3. Запускаем окружение
sourve venv/bin/activate
4. устанавливаем зависимости
python -m pip install -r requirements.txt
5. переходим в проект 
cd silant
6. Далее очень ВАЖНО
7. Создаем базу данных в postgres
CREATE DATABASE silant:
8. Проходите в БД
\c silant
9. Заходим в файл .env и вводим там свои данные:
SECRET_KEY= ключ django, DATABASE_NAME = название бд (silant), DATABASE_PASSWORD = пароль от postgres. 
10. Делаем миграции
python manage.py makemigrations
python manage.py migrate
11. Создаем супер-пользователя КОМАНДОЙ
python manage.py makesuperuser
12. Затем опять переходим в postgres
13. !!! Далее копируете прям весь текст ниже или можете вводить построчно (лучше сразу все). Здесь мы создаем начальные данные в БД:


COPY auth_user FROM '/mnt/d/USER/Documents/ALL_PROJECTS/silant/DB_DATA/Users/users.csv' DELIMITER ';' CSV HEADER encoding 'windows-1251';
COPY silant_app_modelofclients FROM '/mnt/d/USER/Documents/ALL_PROJECTS/silant/DB_DATA/Users/client.csv' DELIMITER ';' CSV HEADER encoding 'windows-1251';
COPY silant_app_modelofservicecompany FROM '/mnt/d/USER/Documents/ALL_PROJECTS/silant/DB_DATA/Users/company.csv' DELIMITER ';' CSV HEADER encoding 'windows-1251';
COPY silant_app_modeloftechnic FROM '/mnt/d/USER/Documents/ALL_PROJECTS/silant/DB_DATA/Car/ModelOfTechnic.csv' DELIMITER ';' CSV HEADER encoding 'windows-1251';
COPY silant_app_modelofengine FROM '/mnt/d/USER/Documents/ALL_PROJECTS/silant/DB_DATA/Car/ModelOfEngine.csv' DELIMITER ';' CSV HEADER encoding 'windows-1251';
COPY silant_app_modeloftransmission FROM '/mnt/d/USER/Documents/ALL_PROJECTS/silant/DB_DATA/Car/ModelOfTransmission.csv' DELIMITER ';' CSV HEADER encoding 'windows-1251';
COPY silant_app_modelofdrivingbridge FROM '/mnt/d/USER/Documents/ALL_PROJECTS/silant/DB_DATA/Car/ModelOfDrivingBridge.csv' DELIMITER ';' CSV HEADER encoding 'windows-1251';
COPY silant_app_modelofcontrolledbridge FROM '/mnt/d/USER/Documents/ALL_PROJECTS/silant/DB_DATA/Car/ModelOfControlledBridge.csv' DELIMITER ';' CSV HEADER encoding 'windows-1251';
COPY "Car" FROM '/mnt/d/USER/Documents/ALL_PROJECTS/silant/DB_DATA/Car/car.csv' DELIMITER ';' CSV HEADER encoding 'windows-1251';
COPY silant_app_typeofto FROM '/mnt/d/USER/Documents/ALL_PROJECTS/silant/DB_DATA/To/TypeOfTo.csv' DELIMITER ';' CSV HEADER encoding 'windows-1251'; 

COPY "TO" FROM '/mnt/d/USER/Documents/ALL_PROJECTS/silant/DB_DATA/To/to.csv' DELIMITER ';' CSV HEADER encoding 'windows-1251';
COPY silant_app_rejection FROM '/mnt/d/USER/Documents/ALL_PROJECTS/silant/DB_DATA/Reclamation/Rejection.csv' DELIMITER ';' CSV HEADER encoding 'windows-1251';
COPY silant_app_recoverymethod FROM '/mnt/d/USER/Documents/ALL_PROJECTS/silant/DB_DATA/Reclamation/RecoveryMethod.csv' DELIMITER ';' CSV HEADER encoding 'windows-1251';
COPY "Reclamation" FROM '/mnt/d/USER/Documents/ALL_PROJECTS/silant/DB_DATA/Reclamation/reclamation.csv' DELIMITER ';' CSV HEADER encoding 'windows-1251';
COPY "Reclamation_nodeOfRejection" FROM '/mnt/d/USER/Documents/ALL_PROJECTS/silant/DB_DATA/Reclamation/Reclamation_nodeOfRejection.csv' DELIMITER ';' CSV HEADER encoding 'windows-1251';
COPY "Reclamation_recovery" FROM '/mnt/d/USER/Documents/ALL_PROJECTS/silant/DB_DATA/Reclamation/Reclamation_recovery.csv' DELIMITER ';' CSV HEADER encoding 'windows-1251';

14. Потом копируете прям весь этот текст ниже или можете вводить построчно (лучше сразу все). Это делается для того,
чтоюы новые данные корректно ложились в БД:

ALTER SEQUENCE "Car_id_seq" restart with 11;
ALTER SEQUENCE "Reclamation_id_seq" restart with 13;
ALTER SEQUENCE "Reclamation_nodeOfRejection_id_seq" restart with 13;
ALTER SEQUENCE "Reclamation_recovery_id_seq" restart with 13;
ALTER SEQUENCE "TO_id_seq" restart with 37;
ALTER SEQUENCE silant_app_modelofclients_id_sqeq restart with 8;
ALTER SEQUENCE silant_app_modelofcontrolledbridge_id_seq restart with 4;
ALTER SEQUENCE silant_app_modelofdrivingbridge_id_seq restart with 5;
ALTER SEQUENCE silant_app_modelofengine_id_seq restart with 6;
ALTER SEQUENCE silant_app_modelofservicecompany_id_seq restart with 5;
ALTER SEQUENCE silant_app_modeloftechnic_id_seq restart with 7;
ALTER SEQUENCE silant_app_modeloftransmission_id_seq restart with 5;
ALTER SEQUENCE silant_app_recoverymethod_id_seq restart with 3;
ALTER SEQUENCE silant_app_rejection_id_seq restart with 7;
ALTER SEQUENCE silant_app_typeofto_id_seq restart with 6;
ALTER SEQUENCE auth_user_id_seq restart with 13;

15. !!! Создаем базовые роли и распределяем существующих пользователей по группам:
python manage.py createroles
16. У меня предусмотрено 3 группы: manager, client и organization
17. далее запускаем сервер
python manage.py runserver
18. Переходим в папку FRONTEND
cd FROMTEND
19. Выполняем команду 
npm install
20. Запускаем веб-сервер
npm run start
21. Хочу обратить внимание, что в Админке нужно обновить пароли у всех пользователей. Иначе не будет заходить.
А у сепер-пользователя логин: admin, пароль: 1234
22. При создании нового пользователя нужно его обязательно довабить в одну из групп.


dont use this (то что ниже, использовать не надо) =>
COPY silant_app_listoforg FROM '/mnt/d/USER/Documents/ALL_PROJECTS/silant/DB_DATA/To/ListOfOrg.csv' DELIMITER ';' CSV HEADER encoding 'windows-1251';
ALTER SEQUENCE silant_app_listoforg_id_seq restart with 5;

1. COPY auth_user FROM '/mnt/d/USER/Documents/ALL_PROJECTS/silant/DB_DATA/Users/users.csv' DELIMITER ';' CSV HEADER encoding 'windows-1251';
2. COPY silant_app_modelofclients FROM '/mnt/d/USER/Documents/ALL_PROJECTS/silant/DB_DATA/Users/client.csv' DELIMITER ';' CSV HEADER encoding 'windows-1251';
3. COPY silant_app_modelofservicecompany FROM '/mnt/d/USER/Documents/ALL_PROJECTS/silant/DB_DATA/Users/company.csv' DELIMITER ';' CSV HEADER encoding 'windows-1251';
4. COPY silant_app_modeloftechnic FROM '/mnt/d/USER/Documents/ALL_PROJECTS/silant/DB_DATA/Car/ModelOfTechnic.csv' DELIMITER ';' CSV HEADER encoding 'windows-1251';
5. COPY silant_app_modelofengine FROM '/mnt/d/USER/Documents/ALL_PROJECTS/silant/DB_DATA/Car/ModelOfEngine.csv' DELIMITER ';' CSV HEADER encoding 'windows-1251';
6. COPY silant_app_modeloftransmission FROM '/mnt/d/USER/Documents/ALL_PROJECTS/silant/DB_DATA/Car/ModelOfTransmission.csv' DELIMITER ';' CSV HEADER encoding 'windows-1251';
7. COPY silant_app_modelofdrivingbridge FROM '/mnt/d/USER/Documents/ALL_PROJECTS/silant/DB_DATA/Car/ModelOfDrivingBridge.csv' DELIMITER ';' CSV HEADER encoding 'windows-1251';
8. COPY silant_app_modelofcontrolledbridge FROM '/mnt/d/USER/Documents/ALL_PROJECTS/silant/DB_DATA/Car/ModelOfControlledBridge.csv' DELIMITER ';' CSV HEADER encoding 'windows-1251';
9. COPY "Car" FROM '/mnt/d/USER/Documents/ALL_PROJECTS/silant/DB_DATA/Car/car.csv' DELIMITER ';' CSV HEADER encoding 'windows-1251';
10. COPY silant_app_typeofto FROM '/mnt/d/USER/Documents/ALL_PROJECTS/silant/DB_DATA/To/TypeOfTo.csv' DELIMITER ';' CSV HEADER encoding 'windows-1251'; 
11. COPY silant_app_listoforg FROM '/mnt/d/USER/Documents/ALL_PROJECTS/silant/DB_DATA/To/ListOfOrg.csv' DELIMITER ';' CSV HEADER encoding 'windows-1251';
12. COPY "TO" FROM '/mnt/d/USER/Documents/ALL_PROJECTS/silant/DB_DATA/To/to.csv' DELIMITER ';' CSV HEADER encoding 'windows-1251';
13. COPY silant_app_rejection FROM '/mnt/d/USER/Documents/ALL_PROJECTS/silant/DB_DATA/Reclamation/Rejection.csv' DELIMITER ';' CSV HEADER encoding 'windows-1251';
14. COPY silant_app_recoverymethod FROM '/mnt/d/USER/Documents/ALL_PROJECTS/silant/DB_DATA/Reclamation/RecoveryMethod.csv' DELIMITER ';' CSV HEADER encoding 'windows-1251';
15. COPY "Reclamation" FROM '/mnt/d/USER/Documents/ALL_PROJECTS/silant/DB_DATA/Reclamation/reclamation.csv' DELIMITER ';' CSV HEADER encoding 'windows-1251';
16. COPY "Reclamation_nodeOfRejection" FROM '/mnt/d/USER/Documents/ALL_PROJECTS/silant/DB_DATA/Reclamation/Reclamation_nodeOfRejection.csv' DELIMITER ';' CSV HEADER encoding 'windows-1251';
17. COPY "Reclamation_recovery" FROM '/mnt/d/USER/Documents/ALL_PROJECTS/silant/DB_DATA/Reclamation/Reclamation_recovery.csv' DELIMITER ';' CSV HEADER encoding 'windows-1251';

