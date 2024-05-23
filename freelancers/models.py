from django.db import models
from django.contrib.auth import get_user_model
from django.utils import timezone


from django.db import models
from django.contrib.auth import get_user_model
from django.utils import timezone

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

    def __str__(self):
        return self.firstname


class Certificate(models.Model):
    certificate_image = models.ImageField(upload_to="certificate_images/")
    description = models.CharField(max_length=400)
    freelancer = models.ForeignKey(
        Freelancer,
        on_delete=models.CASCADE,
        related_name="certificates",
    )


class Project(models.Model):
    project_name = models.CharField(max_length=20)
    description = models.CharField(max_length=400)
    project_file = models.FileField(upload_to="project_files/")
    freelancer = models.ForeignKey(
        Freelancer,
        on_delete=models.CASCADE,
        related_name="projects",
    )


class Category(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class Education(models.Model):
    education_description = models.CharField(max_length=100)
    education_start_date = models.DateField()
    education_end_date = models.DateField(default=timezone.now)
    freelancer = models.ForeignKey(
        Freelancer,
        on_delete=models.CASCADE,
        related_name="educations",
    )

    def __str__(self):
        return self.education_description

    class Meta:
        verbose_name_plural = "Education"

    def get_absolute_url(self):
        return reverse("education_detail", kwargs={"pk": self.pk})


# Signal to create a freelancer object whenever a user signs up
from django.db.models.signals import post_save
from django.dispatch import receiver


@receiver(post_save, sender=User)
def create_freelancer_profile(sender, instance, created, **kwargs):
    if created:
        Freelancer.objects.create(user=instance)
