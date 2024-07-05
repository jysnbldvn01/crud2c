from django.db import models

class Item(models.Model):
    first_name = models.CharField(max_length=250, null=True)
    middle_name = models.CharField(max_length=250, blank=True, null=True)
    last_name = models.CharField(max_length=250, null=True)
    address = models.CharField(max_length=250, blank=True, null=True)
    permanent_address = models.CharField(max_length=250, blank=True, null=True)
    zip_code = models.CharField(max_length=20, blank=True, null=True)
    email = models.EmailField(max_length=250, blank=True, null=True)
    phone = models.CharField(max_length=20, blank=True, null=True)
    date_of_birth = models.DateField(blank=True, null=True)
    place_of_birth = models.CharField(max_length=250, blank=True, null=True)
    civil_status = models.CharField(max_length=250, blank=True, null=True)
    SEX_CHOICES = [
        ('M', 'Male'),
        ('F', 'Female'),
    ]
    sex = models.CharField(max_length=1, choices=SEX_CHOICES, blank=True, null=True)
    height = models.CharField(max_length=20, blank=True, null=True)
    weight = models.CharField(max_length=20, blank=True, null=True)
    bloodtype = models.CharField(max_length=250, blank=True, null=True)
    citizenship = models.CharField(max_length=250, blank=True, null=True)
    gsis = models.CharField(max_length=20, blank=True, null=True)
    pag_ibig_no = models.CharField(max_length=20, blank=True, null=True)
    philhealth = models.CharField(max_length=20, blank=True, null=True)
    sss = models.CharField(max_length=20, blank=True, null=True)
    tin = models.CharField(max_length=20, blank=True, null=True)
    agency_employee_no = models.CharField(max_length=20, blank=True, null=True)
    occupation = models.CharField(max_length=250, blank=True, null=True)
    employee_business = models.CharField(max_length=250, blank=True, null=True)
    business_address = models.CharField(max_length=250, blank=True, null=True)


    def __str__(self) -> str:
        return f'{self.first_name} {self.middle_name} {self.last_name}'
