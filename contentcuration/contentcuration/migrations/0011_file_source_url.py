# -*- coding: utf-8 -*-
# Generated by Django 1.9.7 on 2016-09-07 00:09
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('contentcuration', '0010_auto_20160830_1740'),
    ]

    operations = [
        migrations.AddField(
            model_name='file',
            name='source_url',
            field=models.CharField(blank=True, max_length=400),
        ),
    ]
