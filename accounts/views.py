from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.forms import inlineformset_factory
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth import authenticate, login as auth_login
from django.contrib import messages
from django.contrib.auth.decorators import login_required

# Create your views here .
from .models import *
from freelancers.models import Freelancer

# from .forms import OrderForm, CreateUserForm


from django.contrib.auth.forms import UserCreationForm
from django.urls import reverse_lazy
from .forms import CustomUserCreationForm
from django.views.generic import CreateView


class signup(CreateView):  # Renamed from SignUpView to Signup
    form_class = CustomUserCreationForm
    success_url = reverse_lazy("login")
    template_name = "registration/signup.html"


def login(request):
    if request.user.is_authenticated:
        return redirect("homepage")
    else:
        if request.method == "POST":
            username = request.POST.get("username")
            password = request.POST.get("password")
            user = authenticate(request, username=username, password=password)

            if user is not None:
                auth_login(request, user)
                return redirect("homepage")
            else:
                messages.info(request, " Username OR password is incorrect ")
        context = {}
        return render(request, "registration/login.html", context)


@login_required(login_url="login")
def logoutUser(request):
    logout(request)
    # return redirect("login")
    return render(request, "homepage.html")


def home(request, category=None):
    if category is not None:
        freelancers = Freelancer.objects.filter(categories__name=category)
    else:
        freelancers = Freelancer.objects.all()
    return render(request, "homepage.html", {"freelancers": freelancers})

    # return render(request, "homepage.html")
