import { Component } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent {
    name = 'Иванов Иван Иванович';
    image_path = '25.png';
    bio = 'Автор рабочей программы по дисциплине «Биотехнология агроценозов». Под его руководством выполнены и защищены 2 бакалаврских и 3 магистерские работы студентов кафедры микробиологии СПб Государственного Университета и кафедры промышленной биотехнологии СПб Технологического Университета. ';
}
