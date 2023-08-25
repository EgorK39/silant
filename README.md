1. Копируем репозиторий:
   git clone git@github.com:EgorK39/silant.git
2. cd silant
3. Создаем виртуальное окружение:
   python3 -m venv venv
4. Запускаем окружение:
   source venv/bin/activate
5. устанавливаем зависимости:
   python -m pip install -r requirements.txt
6. Запускаем postgres:
   sudo service postgresql start
7. Заходим в СУБД:
   sudo -u postgres psql
8. Создаем базу данных:
   CREATE DATABASE silant;
9. Возвращаемся в проект
10. Создаем файл .env в корне проекта и добавляем в него свои данные:
    SECRET_KEY= ключ django, DATABASE_NAME = название бд (silant), DATABASE_PASSWORD = пароль от postgres.
11. Переходим далее:
    cd silant
12. Делаем миграции:
    python manage.py makemigrations
    python manage.py migrate
13. Создаем супер-пользователя КОМАНДОЙ:
    python manage.py makesuperuser
14. Переходим в postgres
15. <h3>Копируем строчки ниже (можно все разом). Здесь создаются начальные данные в БД:
    Важно верно указать пути до местоположения каждлго из файлов. Пути должны быть абсолютными. Необходимо под себя
    немного
    исправить.</h3>

<ul>
<li>COPY auth_user FROM '/mnt/d/USER/Documents/ALL_PROJECTS/silant/DB_DATA/Users/users.csv' DELIMITER ';' CSV HEADER
encoding 'windows-1251';</li>
<li>COPY silant_app_modelofclients FROM '/mnt/d/USER/Documents/ALL_PROJECTS/silant/DB_DATA/Users/client.csv' DELIMITER ';'
CSV HEADER encoding 'windows-1251';</li>
<li>COPY silant_app_modelofservicecompany FROM '/mnt/d/USER/Documents/ALL_PROJECTS/silant/DB_DATA/Users/company.csv'
DELIMITER ';' CSV HEADER encoding 'windows-1251';</li>
<li>COPY silant_app_modeloftechnic FROM '/mnt/d/USER/Documents/ALL_PROJECTS/silant/DB_DATA/Car/ModelOfTechnic.csv'
DELIMITER ';' CSV HEADER encoding 'windows-1251';</li>
<li>COPY silant_app_modelofengine FROM '/mnt/d/USER/Documents/ALL_PROJECTS/silant/DB_DATA/Car/ModelOfEngine.csv' DELIMITER '
;' CSV HEADER encoding 'windows-1251';</li>
<li>COPY silant_app_modeloftransmission FROM '/mnt/d/USER/Documents/ALL_PROJECTS/silant/DB_DATA/Car/ModelOfTransmission.csv'
DELIMITER ';' CSV HEADER encoding 'windows-1251';</li>
<li>COPY silant_app_modelofdrivingbridge FROM '
/mnt/d/USER/Documents/ALL_PROJECTS/silant/DB_DATA/Car/ModelOfDrivingBridge.csv' DELIMITER ';' CSV HEADER encoding '
windows-1251';</li>
<li>COPY silant_app_modelofcontrolledbridge FROM '
/mnt/d/USER/Documents/ALL_PROJECTS/silant/DB_DATA/Car/ModelOfControlledBridge.csv' DELIMITER ';' CSV HEADER encoding '
windows-1251';</li>
<li>COPY "Car" FROM '/mnt/d/USER/Documents/ALL_PROJECTS/silant/DB_DATA/Car/car.csv' DELIMITER ';' CSV HEADER encoding '
windows-1251';</li>
<li>COPY silant_app_typeofto FROM '/mnt/d/USER/Documents/ALL_PROJECTS/silant/DB_DATA/To/TypeOfTo.csv' DELIMITER ';' CSV
HEADER encoding 'windows-1251';</li>
<li>COPY "TO" FROM '/mnt/d/USER/Documents/ALL_PROJECTS/silant/DB_DATA/To/to.csv' DELIMITER ';' CSV HEADER encoding '
windows-1251';</li>
<li>COPY silant_app_rejection FROM '/mnt/d/USER/Documents/ALL_PROJECTS/silant/DB_DATA/Reclamation/Rejection.csv' DELIMITER '
;' CSV HEADER encoding 'windows-1251';</li>
<li>COPY silant_app_recoverymethod FROM '/mnt/d/USER/Documents/ALL_PROJECTS/silant/DB_DATA/Reclamation/RecoveryMethod.csv'
DELIMITER ';' CSV HEADER encoding 'windows-1251';</li>
<li>COPY "Reclamation" FROM '/mnt/d/USER/Documents/ALL_PROJECTS/silant/DB_DATA/Reclamation/reclamation.csv' DELIMITER ';'
CSV HEADER encoding 'windows-1251';</li>
<li>COPY "Reclamation_nodeOfRejection" FROM '
/mnt/d/USER/Documents/ALL_PROJECTS/silant/DB_DATA/Reclamation/Reclamation_nodeOfRejection.csv' DELIMITER ';' CSV HEADER
encoding 'windows-1251';</li>
<li>COPY "Reclamation_recovery" FROM '
/mnt/d/USER/Documents/ALL_PROJECTS/silant/DB_DATA/Reclamation/Reclamation_recovery.csv' DELIMITER ';' CSV HEADER
encoding 'windows-1251';</li>
</ul>

16. <h3>Копируем строчки ниже (можно все разом). Это делается для того,
    чтобы новые данные корректно ложились корректно в БД:</h3>

<ul>
<li>ALTER SEQUENCE "Car_id_seq" restart with 11;</li>
<li>ALTER SEQUENCE "Reclamation_id_seq" restart with 13;</li>
<li>ALTER SEQUENCE "Reclamation_nodeOfRejection_id_seq" restart with 13;</li>
<li>ALTER SEQUENCE "Reclamation_recovery_id_seq" restart with 13;</li>
<li>ALTER SEQUENCE "TO_id_seq" restart with 37;</li>
<li>ALTER SEQUENCE silant_app_modelofclients_id_sqeq restart with 8;</li>
<li>ALTER SEQUENCE silant_app_modelofcontrolledbridge_id_seq restart with 4;</li>
<li>ALTER SEQUENCE silant_app_modelofdrivingbridge_id_seq restart with 5;</li>
<li>ALTER SEQUENCE silant_app_modelofengine_id_seq restart with 6;</li>
<li>ALTER SEQUENCE silant_app_modelofservicecompany_id_seq restart with 5;</li>
<li>ALTER SEQUENCE silant_app_modeloftechnic_id_seq restart with 7;</li>
<li>ALTER SEQUENCE silant_app_modeloftransmission_id_seq restart with 5;</li>
<li>ALTER SEQUENCE silant_app_recoverymethod_id_seq restart with 3;</li>
<li>ALTER SEQUENCE silant_app_rejection_id_seq restart with 7;</li>
<li>ALTER SEQUENCE silant_app_typeofto_id_seq restart with 6;</li>
<li>ALTER SEQUENCE auth_user_id_seq restart with 13;</li>
</ul>

17. <h3>Создаем базовые роли и распределяем существующих пользователей по группам:</h3>
    python manage.py createroles
17. У меня предусмотрено 3 группы: manager, client и organization
18. Запускаем сервер:
    python manage.py runserver
19. Переходим в папку FRONTEND:
    cd .. && cd FRONTEND
20. Выполняем команду:
    npm install
21. Запускаем веб-сервер:
    npm run start
22. Хочу обратить внимание, что в Админке нужно обновить пароли у всех пользователей. Иначе не будет заходить.
    <h1>Данные для входа под супер-пользователем: логин: admin, пароль: 1234</h1>
23. При создании нового пользователя нужно его обязательно довабить в одну из групп.

