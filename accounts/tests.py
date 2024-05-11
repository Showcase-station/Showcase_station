from django.test import TestCase, Client
from django.urls import reverse
from django.contrib.auth import get_user_model


class TestViews(TestCase):

    def setUp(self):
        self.client = Client()
        self.user = get_user_model().objects.create_user(
            username="testuser", password="testpass123", email="testuser@example.com"
        )

    def test_signup_POST(self):
        response = self.client.post(
            reverse("signup"),
            {
                "username": "testuser2",
                "email": "testuser2@example.com",
                "password1": "testpass123",
                "password2": "testpass123",
            },
        )

        self.assertEqual(response.status_code, 302)
        self.assertEqual(get_user_model().objects.count(), 2)

    def test_login_POST(self):
        response = self.client.post(
            reverse("login"), {"username": "testuser", "password": "testpass123"}
        )

        self.assertEqual(response.status_code, 302)


def test_logout_GET(self):
    self.client.login(username="testuser", password="testpass123")
    response = self.client.get(reverse("logout"))

    # Check that the response is a successful one
    self.assertEqual(response.status_code, 200)
    self.assertTemplateUsed(response, "homepage.html")
