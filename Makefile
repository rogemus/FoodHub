run-server:
	docker-compose up

run-prod:
	docker-compose -f docker-compose.yml -f docker-compose.prod.yml up

create-admin:
	docker exec -it foodhub-django python manage.py createsuperuser

makemigrations:
	docker-compose run web python ./manage.py makemigrations

migrate:
	docker-compose run web python ./manage.py migrate

load_fxtures:
	docker-compose exec web python manage.py loaddata demo.json