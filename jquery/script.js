let recipes = [{
        name: 'HAMBERGER',
        description: 'cook for 10 hours'
    },
    {
        name: 'fastfood',
        description: 'cook for 10 hours'
    },
    {
        name: 'chicken fry',
        description: 'cook for 10 hours'
    },
    {
        name: 'bread',
        description: 'cook for 10 hours'
    }

]

$.each(recipes, (index, value) => {
    $(".recipe").append("<p>" + value.name + "</p>")
});
$("#search").on("input", function (event) {
    let search = $(this).val()
    let objects = $.grep(recipes, function (object) {
        return object.name.toLowerCase().includes(search.toLowerCase())
    })
    console.log(objects)
})