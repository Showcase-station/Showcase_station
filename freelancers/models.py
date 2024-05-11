from django.db import models
from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()


class Freelancer(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    firstname = models.CharField(max_length=20)
    lastname = models.CharField(max_length=20)
    nationality = models.CharField(max_length=30)
    age = models.CharField(max_length=3)
    phone_number = models.CharField(max_length=20)
    photo_id = models.ImageField(upload_to="freelancer_photos/", blank=True, null=True)
    email = models.CharField(max_length=50)
    bio = models.CharField(max_length=200)
    description = models.CharField(max_length=4000)
    facebook_link = models.CharField(max_length=100, blank=True, null=True)
    instagram_link = models.CharField(max_length=100, blank=True, null=True)
    whatsapp_link = models.CharField(max_length=100, blank=True, null=True)
    telegram_link = models.CharField(max_length=100, blank=True, null=True)
    linkedin_link = models.CharField(max_length=100, blank=True, null=True)
    viber_link = models.CharField(max_length=100, blank=True, null=True)
    twitter_link = models.CharField(max_length=100, blank=True, null=True)
    skype_link = models.CharField(max_length=100, blank=True, null=True)
    tiktok_link = models.CharField(max_length=100, blank=True, null=True)
    youtube_link = models.CharField(max_length=100, blank=True, null=True)
    github_link = models.CharField(max_length=100, blank=True, null=True)
    behance_link = models.CharField(max_length=100, blank=True, null=True)

    categories = models.ManyToManyField("Category", related_name="freelancers")

    # def clean(self):
    #  super().clean()
    #  if not self.categories.exists():
    # raise ValidationError("A freelancer must choose at least one category.")

    def __str__(self):
        return self.firstname


class Certificate(models.Model):
    freelancer = models.ForeignKey(
        Freelancer, related_name="certificates", on_delete=models.CASCADE
    )
    certificate_image = models.ImageField(upload_to="certificate_images/")
    description = models.CharField(max_length=400)


class Project(models.Model):
    freelancer = models.ForeignKey(
        Freelancer, related_name="projects", on_delete=models.CASCADE
    )
    project_name = models.CharField(max_length=20)
    description = models.CharField(max_length=400)
    project_file = models.FileField(upload_to="project_files/")


class Category(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class Education(models.Model):
    freelancer = models.ForeignKey(
        Freelancer, related_name="educations", on_delete=models.CASCADE
    )
    education_description = models.CharField(max_length=200)
    education_start_date = models.DateField()
    education_end_date = models.DateField(null=True, blank=True)


# this to creat a freelancer object whenever a user signup (user object created)
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.contrib.auth import get_user_model

User = get_user_model()


@receiver(post_save, sender=User)
def create_freelancer_profile(sender, instance, created, **kwargs):
    if created:
        Freelancer.objects.create(user=instance)
