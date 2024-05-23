"""
URL configuration for django_project project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from django.contrib import admin
from django.urls import path, include
from accounts.views import signup, login, logoutUser, home
from freelancers.views import (
    about,
    contact,
    help,
    how_it_works,
    privacy,
    terms,
    submit_portfolio,
    # form,
    profile,
)
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path("admin/", admin.site.urls),
    path("login/", login, name="login"),
    path("signup/", signup.as_view(), name="signup"),
    path("logout/", logoutUser, name="logout"),
    path("about/", about, name="about"),
    path("contact/", contact, name="contact"),
    path("help/", help, name="help"),
    path("how it works/", how_it_works, name="how it works"),
    path("privacy/", privacy, name="privacy"),
    path("terms/", terms, name="terms"),
    path(
        "submit-portfolio/<int:freelancer_id>/",
        submit_portfolio,
        name="submit_portfolio",
    ),
    # path("form/<int:freelancer_id>/", form, name="form"),
    path("profile/<int:freelancer_id>/", profile, name="profile"),
    path("", home, name="homepage"),
    path("<str:category>/", home, name="homepage_with_category"),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
