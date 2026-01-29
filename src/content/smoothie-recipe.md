---
layout: base.njk
title: The Ultimate Heart-Healthy Smoothie | HeartHealth Brands
description: A delicious, nutrient-dense, high-fiber smoothie recipe designed to help you naturally lower cholesterol and improve heart health.
image: /images/smoothie-hero.png
permalink: /content/smoothie-recipe.html
date: 2026-01-28
tags: ['recipe', 'breakfast', 'smoothie', 'high-protein', 'high-fiber']
badges: ['Breakfast Recipe', 'High Fiber', 'Antioxidant Rich']
nutrition:
  - { label: 'Calories', value: '~313', color: 'text-slate-800' }
  - { label: 'Protein', value: '35g', color: 'text-slate-800' }
  - { label: 'Fiber', value: '9g', color: 'text-green-600' }
ingredients:
  - { amount: '1 scoop', name: 'Protein Powder (Unflavored)' }
  - { amount: '1 tbsp', name: 'Almond Butter (Unsweetened)' }
  - { amount: '2 tbsp', name: 'Greek Yogurt (Plain, Non-fat)' }
  - { amount: '1 cup', name: 'Frozen Mixed Berries' }
  - { amount: '2-3 cups', name: 'Fresh Spinach' }
  - { amount: '1 cup', name: 'Water or Almond Milk' }
instructions:
  - "Combine all ingredients in a blender. For best results, add liquids first."
  - "Blend on high for 60-90 seconds until completely smooth."
  - "Pour into a glass and enjoy immediately!"
sourcing:
  - { product: 'Protein Powder', brand: 'Isopure (Unflavored)', url: 'https://www.amazon.com/dp/B002TG3QPO' }
  - { product: 'Almond Butter', brand: "Trader Joe's (No Salt)", url: 'https://www.traderjoes.com/home/products/pdp/creamy-almond-butter-no-salt-051435' }
  - { product: 'Greek Yogurt', brand: "Trader Joe's (Nonfat)", url: 'https://www.traderjoes.com/home/products/pdp/greek-nonfat-yogurt-plain-095732' }
---

<div class="bg-white">
  <div class="container mx-auto px-6 pt-20 pb-12 text-center max-w-4xl">
    <div class="flex flex-wrap justify-center gap-2 mb-6">
      {% for badge in badges %}
      <span class="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-green-800 uppercase bg-green-100 rounded-full">
        {{ badge }}
      </span>
      {% endfor %}
    </div>
    <h1 class="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-6">
      {{ title | replace: " | HeartHealth Brands", "" }}
    </h1>
    <p class="text-lg md:text-xl text-slate-600 leading-relaxed">
      {{ description }}
    </p>
    <button onclick="window.print()" class="mt-8 inline-flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-green-600 transition-colors cursor-pointer border-none bg-transparent">
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"></path></svg>
      Print Recipe
    </button>
  </div>
</div>

<div class="container mx-auto px-6 max-w-5xl mb-12">
  <div class="relative rounded-3xl overflow-hidden shadow-2xl aspect-video md:aspect-[21/9]">
    <img src="{{ image }}" alt="A delicious berry smoothie." class="absolute inset-0 w-full h-full object-cover">
  </div>
</div>

<div class="container mx-auto px-6 max-w-6xl pb-24">
  <div class="bg-white rounded-xl shadow-sm border border-slate-200 p-6 mb-12 max-w-4xl mx-auto">
    <div class="grid grid-cols-3 gap-4 divide-x divide-slate-100">
      {% for item in nutrition %}
      <div class="text-center px-2">
        <p class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">{{ item.label }}</p>
        <p class="text-2xl md:text-3xl font-extrabold tabular-nums {{ item.color }}">{{ item.value }}</p>
      </div>
      {% endfor %}
    </div>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
    <div class="lg:col-span-8 space-y-12">
      <div class="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <div class="p-8 md:p-10">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 class="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
                Ingredients
              </h3>
              <ul class="space-y-3 text-slate-700">
                {% for item in ingredients %}
                <li class="pb-2 border-b border-slate-50 last:border-0">
                  <span class="font-bold text-slate-900">{{ item.amount }}</span> {{ item.name }}
                </li>
                {% endfor %}
              </ul>
            </div>

            <div>
              <h3 class="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6h45m-4-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
                Instructions
              </h3>
              <ol class="space-y-6 text-slate-700 list-none relative">
                {% for step in instructions %}
                <li class="relative pl-10">
                  <span class="absolute left-0 top-0.5 flex items-center justify-center w-7 h-7 rounded-full bg-slate-100 text-xs font-bold text-slate-600">
                    {{ forloop.index }}
                  </span>
                  {{ step }}
                </li>
                {% endfor %}
              </ol>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-green-50 rounded-2xl p-8 border border-green-100">
        <h2 class="text-2xl font-bold text-slate-900 mb-4">Why This Works for Heart Health</h2>
        <ul class="space-y-6">
          <li class="flex gap-4">
            <div class="flex-shrink-0 w-6 h-6 rounded-full bg-green-200 flex items-center justify-center mt-1">
              <svg class="w-4 h-4 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
            </div>
            <div>
              <strong class="block text-slate-900 font-bold">Monounsaturated Fats</strong>
              <span class="text-slate-700">Almond butter provides fats that support healthy cholesterol levels.</span>
            </div>
          </li>
        </ul>
      </div>

      <div class="pt-8 border-t border-slate-200">
        {% include "share-bar.njk" %}
      </div>
    </div>

    <div class="lg:col-span-4">
      <div class="bg-white rounded-xl shadow-sm border border-slate-200 p-6 sticky top-24">
        <h2 class="text-lg font-bold text-slate-900 mb-4">Ingredient Sourcing</h2>
        <div class="space-y-4">
          {% for item in sourcing %}
          <div class="flex justify-between items-start gap-4">
            <div>
              <p class="font-semibold text-slate-800 text-sm">{{ item.product }}</p>
              <p class="text-xs text-slate-500">{{ item.brand }}</p>
            </div>
            <a href="{{ item.url }}" target="_blank" class="text-xs font-bold text-green-600 border border-green-200 px-3 py-1 rounded hover:bg-green-50 transition-colors shrink-0">View</a>
          </div>
          {% endfor %}
        </div>
      </div>
    </div>
  </div>
</div>