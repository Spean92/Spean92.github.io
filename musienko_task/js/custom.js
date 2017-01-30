
var jsonString = {
  "users": [
    {
      "id": "1",
      "name": "Levon",
      "surname": "Sargis",
      "desc": "Phasellus magna enim, congue id dolor sed, molestie fermentum justo. Proin arcu sem, auctor et neque at, pulvinar aliquet magna."
    },
    {
      "id": "2",
      "name": "Poghos",
      "surname": "Haig",
      "desc": "Cras nec ornare nulla, at volutpat leo. Suspendisse tristique nec nisi vitae fringilla. Vivamus nunc ex, condimentum ac accumsan eu."
    },
    {
      "id": "3",
      "name": "Keghart",
      "surname": "Petros",
      "desc": "Maecenas scelerisque massa id fermentum gravida. Suspendisse tempor placerat erat nec consectetur. Sed mollis nisi ut lectus viverra, quis dictum."
    },
    {
      "id": "4",
      "name": "Vardan",
      "surname": "Hakob",
      "desc": "Nullam ut risus faucibus, volutpat elit condimentum, iaculis erat. Ut placerat varius ligula. Aliquam erat volutpat. Vestibulum eleifend congue sagittis."
    },
    {
      "id": "5",
      "name": "Ohannes",
      "surname": "Sahak",
      "desc": "Aliquam at nisi finibus, volutpat lorem nec, sodales nunc. Morbi sodales ligula nec enim hendrerit consectetur. Sed tempus pulvinar sem."
    },
    {
      "id": "6",
      "name": "Khajag",
      "surname": "Stepan",
      "desc": "Nunc mattis erat odio, et tempus felis pulvinar ac. Aliquam a odio et ipsum mattis consectetur eu ut massa. Nulla."
    },
    {
      "id": "7",
      "name": "Jirair",
      "surname": "Ara",
      "desc": "Vivamus rhoncus interdum metus, sit amet viverra dolor bibendum vel. Vestibulum sit amet suscipit nibh. Fusce ornare tellus non urna."
    },
    {
      "id": "8",
      "name": "Sevan",
      "surname": "Hagop",
      "desc": "Quisque nec aliquam enim. Nam nisi diam, porttitor at tortor nec, gravida dictum erat. In hac habitasse platea dictumst. Vestibulum."
    },
    {
      "id": "9",
      "name": "Daniel",
      "surname": "Avetis",
      "desc": "Phasellus nec sem condimentum, varius lectus a, efficitur leo. Suspendisse potenti. Curabitur vel pharetra metus, nec scelerisque sapien. Sed non."
    },
    {
      "id": "10",
      "name": "Levon",
      "surname": "Sargis",
      "desc": "Phasellus magna enim, congue id dolor sed, molestie fermentum justo. Proin arcu sem, auctor et neque at, pulvinar aliquet magna."
    },
    {
      "id": "11",
      "name": "Poghos",
      "surname": "Haig",
      "desc": "Cras nec ornare nulla, at volutpat leo. Suspendisse tristique nec nisi vitae fringilla. Vivamus nunc ex, condimentum ac accumsan eu."
    },
    {
      "id": "12",
      "name": "Keghart",
      "surname": "Petros",
      "desc": "Maecenas scelerisque massa id fermentum gravida. Suspendisse tempor placerat erat nec consectetur. Sed mollis nisi ut lectus viverra, quis dictum."
    },
    {
      "id": "13",
      "name": "Vardan",
      "surname": "Hakob",
      "desc": "Nullam ut risus faucibus, volutpat elit condimentum, iaculis erat. Ut placerat varius ligula. Aliquam erat volutpat. Vestibulum eleifend congue sagittis."
    },
    {
      "id": "14",
      "name": "Hagop",
      "surname": "Rouben",
      "desc": "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas faucibus eleifend imperdiet. Sed quis tellus."
    },
    {
      "id": "15",
      "name": "Ohannes",
      "surname": "Sahak",
      "desc": "Aliquam at nisi finibus, volutpat lorem nec, sodales nunc. Morbi sodales ligula nec enim hendrerit consectetur. Sed tempus pulvinar sem."
    },
    {
      "id": "16",
      "name": "Khajag",
      "surname": "Stepan",
      "desc": "Nunc mattis erat odio, et tempus felis pulvinar ac. Aliquam a odio et ipsum mattis consectetur eu ut massa. Nulla."
    },
    {
      "id": "17",
      "name": "Jirair",
      "surname": "Ara",
      "desc": "Vivamus rhoncus interdum metus, sit amet viverra dolor bibendum vel. Vestibulum sit amet suscipit nibh. Fusce ornare tellus non urna."
    },
    {
      "id": "18",
      "name": "Sevan",
      "surname": "Hagop",
      "desc": "Quisque nec aliquam enim. Nam nisi diam, porttitor at tortor nec, gravida dictum erat. In hac habitasse platea dictumst. Vestibulum."
    },
    {
      "id": "19",
      "name": "Daniel",
      "surname": "Avetis",
      "desc": "Phasellus nec sem condimentum, varius lectus a, efficitur leo. Suspendisse potenti. Curabitur vel pharetra metus, nec scelerisque sapien. Sed non."
    },
    {
      "id": "20",
      "name": "Hagop",
      "surname": "Rouben",
      "desc": "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas faucibus eleifend imperdiet. Sed quis tellus."
    }
  ]
}
$(document).ready(function() {

  $("#owl-demo").owlCarousel({

      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true
  });


	$('.fa-bars').click(function() {
		$('ul').slideDown(300);
		$('.fa-times').show();
	});
	$('.fa-times').click(function() {
		$('ul').slideUp(300);
	});

});
for (var i = 0; i < jsonString.users.length; i++) {
//	console.log(jsonString.users[i].id);

  var parentElem = document.getElementById('accounts');
  var div = document.createElement('div');
  var rElement = document.createElement('input');
  var chElement = document.createElement('div');
  var picElem = document.createElement('img');
  var hElement = document.createElement('h2');
  var pElement = document.createElement('p');

  div.className = "users";
  rElement.setAttribute("type", "radio");
  chElement.className = "check";
  rElement.setAttribute("name","lol");
  picElem.setAttribute("src", "img/user.png");
  hElement.innerHTML = jsonString.users[i].name +' '+ jsonString.users[i].surname;
  pElement.innerHTML = jsonString.users[i].desc;

  parentElem.insertBefore(div, null);
  div.insertBefore(rElement, null);
  div.insertBefore(chElement, null);
  div.insertBefore(picElem, null);
  div.insertBefore(hElement, null);
  div.insertBefore(pElement, null);
}