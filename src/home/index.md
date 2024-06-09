---
title: home
layout: base
---

<ul>
{% for home in collections.home %}
<li><a href="{{ home.url }}">{{ home.data.indexname }}</a></li>
{% endfor %}
</ul>
