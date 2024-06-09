---
title: Craft
layout: base
---

<ul>
{% for craft in collections.crafts %}
<li><a href="{{ craft.url }}">{{ craft.data.indexname }}</a></li>
{% endfor %}
</ul>
