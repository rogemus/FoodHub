run-server:
	docker-compose up

create-admin:
	docker exec -it foodhub-django python manage.py createsuperuser

makemigrations:
	docker-compose run web python ./manage.py makemigrations

migrate:
	docker-compose run web python ./manage.py migrate
