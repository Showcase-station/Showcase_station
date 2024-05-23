from django.shortcuts import render
from .models import Freelancer, Category, Certificate, Project, Education
from django.shortcuts import render, get_object_or_404
from django.contrib import messages
from django.contrib import admin
from django.forms import modelformset_factory
from .forms import FreelancerForm


from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from .forms import FreelancerForm

from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth.decorators import login_required
from .forms import FreelancerForm
from .models import Freelancer


@login_required
def submit_portfolio(request, freelancer_id):
    freelancer = get_object_or_404(Freelancer, id=freelancer_id, user=request.user)

    if request.method == "POST":
        form = FreelancerForm(request.POST, request.FILES, instance=freelancer)
        if form.is_valid():
            freelancer = form.save(commit=False)
            freelancer.user = request.user
            freelancer.save()
            form.save_m2m()  # Save many-to-many relationships
            return redirect("homepage")  # Replace with the URL you want to redirect to
    else:
        form = FreelancerForm(instance=freelancer)

    return render(request, "submit_portfolio.html", {"form": form})


def profile(request, freelancer_id):
    # Retrieve the freelancer with the specified ID or return a 404 error if not found
    freelancer = get_object_or_404(Freelancer, pk=freelancer_id)

    # Render the portfolio.html template with the freelancer context
    return render(request, "portfolio.html", {"freelancer": freelancer})
    # return render(request, "homepage.html")


def about(request):
    return render(request, "about.html")


def contact(request):
    return render(request, "contact.html")


def help(request):
    return render(request, "help.html")


def how_it_works(request):
    return render(request, "how_it_works.html")


def privacy(request):
    return render(request, "privacy.html")


def terms(request):
    return render(request, "terms.html")
