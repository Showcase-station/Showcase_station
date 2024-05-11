from django.shortcuts import render
from django.shortcuts import render
from .models import Freelancer


# def home(request): the work of this view has been added to the accounts views.py file


def form(request):
    return render(request, "form.html")
