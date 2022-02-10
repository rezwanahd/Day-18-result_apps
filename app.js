// get Element

const student_form = document.querySelector("#student_form");

student_form.addEventListener("submit", function (e) {
  e.preventDefault();

  let name = student_form.querySelector('input[placeholder="Student Name"]');
  let stu_cls = student_form.querySelector('input[placeholder="Class"]');
  let roll = student_form.querySelector('input[placeholder="Roll"]');
  let gender = student_form.querySelector('input[type="radio"]:checked');
  let photo = student_form.querySelector('input[placeholder="Photo"]');
  let ban = student_form.querySelector('input[placeholder="Bangla"]');
  let eng = student_form.querySelector('input[placeholder="English"]');
  let math = student_form.querySelector('input[placeholder="Math"]');
  let sci = student_form.querySelector('input[placeholder="Science"]');
  let ss = student_form.querySelector('input[placeholder="S-Science"]');
  let rel = student_form.querySelector('input[placeholder="Religion"]');

  if (name.value == "" || stu_cls.value == "" || roll.value == "") {
    alert("All fields are required");
  } else {
    let stu_data = [];
    if (dataGet("result")) {
      stu_data = dataGet("result");
    }

    stu_data.push({
      name: name.value,
      class: stu_cls.value,
      roll: roll.value,
      gender: gender.value,
      photo: photo.value,
    });

    dataSend("result", stu_data);
 
        student_form.querySelector('input[placeholder="Student Name"]').value ='';
        student_form.querySelector('input[placeholder="Class"]').value ='';
        student_form.querySelector('input[placeholder="Roll"]').value ='';
        student_form.querySelectorAll('input[type="radio"]:checked').value = '';
        student_form.querySelector('input[placeholder="Photo"]').value ='';
        student_form.querySelector('input[placeholder="Bangla"]').value ='';
        student_form.querySelector('input[placeholder="English"]').value ='';
        student_form.querySelector('input[placeholder="Math"]').value ='';
        student_form.querySelector('input[placeholder="Science"]').value ='';
        student_form.querySelector('input[placeholder="S-Science"]').value ='';
        student_form.querySelector('input[placeholder="Religion"]').value ='';
  }

  allstudentdata();


});
const list_data = document.querySelector('.list-data')
allstudentdata();
function allstudentdata() {
  let all_data = dataGet("result");
  let data = "";

  all_data.map((student, index) => {
    data += `
            <tr>
                <th>${index + 1}</th>
                <td>${student.name}</td>
                <td>${student.class}</td>
                <td>${student.roll}</td>
                <td>${student.gender}</td>
                <td><img style="width:50px;height:50px;object-fit:cover;" src="${student.photo}"></td>
                <td>
                <button class="btn btn-info">View</button>
                <button onclick=" deleteStudent(${index})" class="btn btn-danger">Delete</button>
                </td>
            </tr>`;
  });

  list_data.innerHTML = data;

};

function deleteStudent(id){

    let conf = confirm("Are You Sure");
    if (conf) {

        let stu_data = dataGet('result');
        stu_data.splice(id , 1);
        dataSend('result',stu_data);
        allstudentdata();
        
    } else {
        
        return false;
    }
   

}
