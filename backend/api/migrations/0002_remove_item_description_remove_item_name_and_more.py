# Generated by Django 5.0.4 on 2024-06-17 00:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='item',
            name='description',
        ),
        migrations.RemoveField(
            model_name='item',
            name='name',
        ),
        migrations.AddField(
            model_name='item',
            name='address',
            field=models.CharField(blank=True, max_length=250, null=True),
        ),
        migrations.AddField(
            model_name='item',
            name='email',
            field=models.EmailField(blank=True, max_length=250, null=True),
        ),
        migrations.AddField(
            model_name='item',
            name='first_name',
            field=models.CharField(max_length=250, null=True),
        ),
        migrations.AddField(
            model_name='item',
            name='last_name',
            field=models.CharField(max_length=250, null=True),
        ),
        migrations.AddField(
            model_name='item',
            name='middle_name',
            field=models.CharField(blank=True, max_length=250, null=True),
        ),
        migrations.AddField(
            model_name='item',
            name='phone',
            field=models.CharField(blank=True, max_length=20, null=True),
        ),
    ]
