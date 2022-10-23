<script>
function preventFormSubmit() {
var forms = document.querySelectorAll('form');
for (var i = 0; i < forms.length; i++) {
forms[i].addEventListener('submit', function(event) {
event.preventDefault();
});
 }
}
window.addEventListener('load', preventFormSubmit);
function addRow(formObject)
{
google.script.run.withSuccessHandler(updateUrl).withFailureHandler(onFailure).addRecord(formObject);\
}
function updateUrl(url) {
var div = document.getElementById('output');
if(url !=""){
// div.innerHTML =  url;
div.innerHTML = '<div class="alert alert-success" role="alert"> Details have been received successfully! </div>';
document.getElementById("myForm").reset();
}
}
function onFailure(error) {
var div = document.getElementById('output');
// div.innerHTML = error.message;
div.innerHTML = '<div class="alert alert-danger" role="alert"> Something went wrong</div>';
}
</script>