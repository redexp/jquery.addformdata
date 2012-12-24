jQuery addFormData plugin
==================

#Usage

We have some form
```html
<form></form>
```
some extra data
```javascript
var data = {
    obj: {
        field: 'val'
    },
    arr: [1,2],
    field: 'val'
};
```

And here how we can add this data to our form before submit
```javascript
$('form').submit(function(){
    $(this).addFormData(data);
});
```

Result
```html
<form>
    <input type="hidden" name="obj[field]" value="val"/>
    <input type="hidden" name="arr[0]" value="1"/>
    <input type="hidden" name="arr[1]" value="2"/>
    <input type="hidden" name="field" value="val"/>
</form>
```