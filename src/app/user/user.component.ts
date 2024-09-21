import { Component, signal, computed, Input, input, Output, EventEmitter, output } from "@angular/core";
// import { DUMMY_USERS } from "../dummy-users";

// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)

// type User={
//     id:string;
//     name:string;
//     avatar:string;
// }

interface User {
    id: string;
    name: string;
    avatar: string;
}

@Component({
    selector: 'app-user',
    standalone: true,
    imports: [],
    templateUrl: './user.component.html',
    styleUrl: './user.component.css'
})

// Without Signal
// export class UserComponent {
//     selectedUser = DUMMY_USERS[randomIndex];
//     get imgPath() {
//         return 'assets/users/' + this.selectedUser.avatar;
//     }

//     onSelectUser() {
//         const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
//         this.selectedUser = DUMMY_USERS[randomIndex];
//     }
// }

// @ is used as a decorator

// With Signal
export class UserComponent {
    // selectedUser = signal(DUMMY_USERS[randomIndex]);
    // imgPath=computed(()=>'assets/users/'+this.selectedUser().avatar);

    //Taking input without Signal
    // @Input({ required: true }) id!: string;  //With the '!' symbol we convence typescript that at some point the value for id will be set. Otherwise it will throw error. We can also use '?' instead of '!'. But '?' means that the value for id might not be set anywhere and that is ok.
    // @Input({ required: true }) avatar!: string; //Instead of '?' we can also use @Input() avatar!: string | undefined;
    // @Input({ required: true }) name!: string;

    // @Input({required:true}) user!:{
    //     id:string;
    //     name:string;
    //     avatar:string;
    // }

    @Input({ required: true }) user!: User;

    @Output() select = new EventEmitter();
    // select=output<string>();
    imgPath = computed(() => 'assets/users/' + this.user.avatar);

    //Taking input with Signal
    // avatar = input.required();
    // name = input.required();
    // imgPath = computed(() => 'assets/users/' + this.avatar());

    onSelectUser() {
        // const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
        // this.selectedUser.set(DUMMY_USERS[randomIndex]);
        this.select.emit(this.user.id);
    }
}




// Zone.js automates change detection globally by tracking all asynchronous operations. It's great for simplicity but can introduce unnecessary overhead.
// Signals offer a more explicit and efficient way to track reactive data, giving developers more control over when and how the UI updates.