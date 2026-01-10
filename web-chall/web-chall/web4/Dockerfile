FROM python:3.11-slim

WORKDIR /app

RUN pip install flask

COPY app.py .
COPY templates/ templates/

CMD ["python", "app.py"]
