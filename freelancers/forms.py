from django import forms
from .models import Freelancer, Category


class FreelancerForm(forms.ModelForm):
    class Meta:
        model = Freelancer
        fields = [
            "firstname",
            "lastname",
            "bio",
            "description",
            "phone_number",
            "email",
            "photo_id",
            "categories",
            "facebook_link",
            "instagram_link",
            "linkedin_link",
            "whatsapp_link",
            "github_link",
            "twitter_link",
            "behance_link",
            "telegram_link",
            "viber_link",
            "skype_link",
            "tiktok_link",
            "youtube_link",
        ]

        widgets = {"categories": forms.SelectMultiple(attrs={"id": "category"})}

    def __init__(self, *args, **kwargs):
        super(FreelancerForm, self).__init__(*args, **kwargs)
        link_fields = [
            "facebook_link",
            "instagram_link",
            "whatsapp_link",
            "telegram_link",
            "linkedin_link",
            "viber_link",
            "twitter_link",
            "skype_link",
            "tiktok_link",
            "youtube_link",
            "github_link",
            "behance_link",
        ]
        for field in link_fields:
            self.fields[field].widget = forms.URLInput(
                attrs={
                    "placeholder": f'https://www.{field.split("_")[0]}.com/username/'
                }
            )
        simple_fields = [
            "firstname",
            "lastname",
            "bio",
            "description",
            "phone_number",
            "email",
        ]
        for field in simple_fields:
            self.fields[field].widget.attrs.update(
                {"placeholder": f"Enter your {field}"}
            )
        self.fields["categories"].widget.attrs.update(
            {"placeholder": "Add the category that best suits your freelance"}
        )
        self.fields["photo_id"].widget = forms.FileInput(
            attrs={"id": "file", "accept": "image/*", "hidden": True}
        )
