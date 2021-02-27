from django.urls import path
from .views import MainView, file_upload_view

urlpatterns = [
	path('', MainView.as_view(), name='main-view'),
	path('upload/', file_upload_view, name='upload-view')

]