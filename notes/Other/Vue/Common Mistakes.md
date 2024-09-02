---
subject: Vue
date: 2024-03-23T17:19:00
---

# Common Mistakes

## Omitting the Key Directive on `v-for`

When omitted, HTML items are not reordered when data is reordered
**Do not use array index as key**
Key can be any constant coercible to string like label, not just id

## Prop Drilling

![[Prop Drilling]]

## Reassigning `reactive`

This replaces the `reactive` object and breaks watchers

Solution: use `ref` instead

## Unintentionally Mutating `props.modalValue`

e.g. by binding it to `v-model` on component children

Solution: maintain a local copy of the data to mutate

## Not Cleaning Up Event Listeners

Components are not gc'ed if they have active event listeners
`v-if` destroys and recreates components ==> Memory leak

Solutions:

- Clean up event listeners inside `onUnmounted`
- Vueuse has helper functions

## Destructuring Reactive Data

Properties of a reactive object are not reactive, so reactivity is lost when destructuring

Solutions:

- Use `prop = computed(() => obj.prop)`
- Use `obj.prop` directly
- Use `{ prop } = toRefs(obj)`

## Calling Composables in the Wrong Place

Vue cannot determine the active component ==> Life-cycle hooks and watchers cannot be linked to the component

Solution: always use composables at the top level of components or composables