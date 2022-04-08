# Svelte Sheet Dialog@0.0.1

*Simple, light weight, customizable, sheet dialog made in Svelte*


by [*@kudadam*](https://www.kudadam.com/)

## Install

Open your terminal and type in `npm install -D svelte-sheet-dialog`
You can also install it with whatever package manager you use

## Usage

In order to use it, you need to first import it.

```svelte
<script>
    import SheetModal from "svelte-sheet-modal";
    let open = true;
</script>

<SheetModal {open}>
    Your content goes here
</SheetModal>
```

*It's very easy to use*

Demo

## Customizing

This component is very customizable, you can modify it how you want.

```svelte
<script>
    import SheetModal from "svelte-sheet-modal";
    let dialogOpen = false
</script>
    
<SheetModal 
on:close={()=>{dialogOpen = false}}
{open}=false
position="bottom"
showBackdrop=false
--sheet-dialog-background=linear-gradient(red,blue)
--sheet-dialog-color=white
--sheet-dialog-padding=5px
>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis dolores quaerat facere amet, quia culpa dolore sit quos eligendi doloribus
</SheetModal>
```

## Documentation

### Events

These are the events emitted by the component, you can listen to them by using the `on:` directive

- close

  This is called when the modal is closed

### Props

These are the attributes which the component

| Property                             | Default Value     | Description                                                  |
| ------------------------------------ | ----------------- | ------------------------------------------------------------ |
| open                                 | false             | This is used to open or close the modal component. Accepted values are `true` and `false` |
| position                             | bottom            | This is used to set the position of the modal. Valid values are `top` and `bottom` |
| showBackdrop                         | `false`           | If set to `true`, a backdrop will be displayed when the component is shown |
| clickBackdropToClose                 | `true`            | This allows you to close the modal by clicking on the backdrop. |
| `--sheet-dialog-backdrop-background` | `rgba(0,0,0,0.7)` | This is the background colour of the backdrop. Any valid CSS background value is accepted |
| `--sheet-dialog-background`          | blue              | This is used to set the background colour of the modal       |
| `--sheet-dialog-color`               | white             | This is used to set the text color of the modal. Any valid CSS colour is accepted |
| `--maximum-height`                   | 30%               | This is used to set the maximum height of the modal          |
| `swipeToClose`                       | `True`            | Allows the modal to be closed by swiping down on the modal   |
| --z-index                            | 9999              | This allows you to set the order stacking of the modal       |