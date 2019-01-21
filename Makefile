run-server:
	docker-compose up

create-admin:
	docker exec -it foodhub-django python manage.py createsuperuser
