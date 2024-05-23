# freelancers/admin.py
from django.contrib import admin
from .models import Freelancer, Certificate, Education, Project, Category


class CertificateInline(admin.TabularInline):
    model = Certificate
    extra = 1  # Number of empty forms to display


class EducationInline(admin.TabularInline):
    model = Education
    extra = 1


class ProjectInline(admin.TabularInline):
    model = Project
    extra = 1


class FreelancerAdmin(admin.ModelAdmin):
    inlines = [CertificateInline, EducationInline, ProjectInline]


admin.site.register(Freelancer, FreelancerAdmin)
admin.site.register(Certificate)
admin.site.register(Education)
admin.site.register(Project)
admin.site.register(Category)
