---
tags:
  - Vue
date: 2024-03-23T17:21:00
---

# Exposing Component State

## `defineExpose`

Use `defineExpose` in child and get state from parent via component ref
Standard way of exposing state

## Slot Props

Define props in component slot, then use `v-slot` in consumer to get props
Difference: props are only exposed to the slot and not available to the parent components

## `v-model` & `defineModel`

Often more intuitive than alternatives