from django.shortcuts import render
from django.http import JsonResponse
from .forms import PhotoForm
from .models import Photo
# Create your views here.

def photo_add_view(request):
	form = PhotoForm(request.POST or None, request.FILES or None)
	data = {}
	if request.is_ajax():
		if form.is_valid():
			form.save()
			data['name'] = form.cleaned_data.get('name')
			data['status'] = 'ok'
			return JsonResponse(data)
	context = {
		'form': form, 
	}
	return render(request, 'photo/main.html', context)