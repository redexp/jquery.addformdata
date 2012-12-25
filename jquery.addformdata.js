(function($){
    var unserialise = function(obj, prefix) {
        var arr = [];
        for(var field in obj) {
            var name  = prefix ? prefix + '[' + field + ']' : field,
                value = obj[field];
            if( typeof value === 'object' ) {
                arr = arr.concat(unserialise(value, name));
            }
            else {
                arr.push({name: name, value: value});
            }
        }

        return arr;
    };

    $.fn.addFormData = function(obj){
        var arr = unserialise(obj);
        for(var i = 0, len = arr.length; i < len; i++) {
            this.append(
                $('<input type="hidden">').attr(arr[i])
            );
        }
    };
})(jQuery);