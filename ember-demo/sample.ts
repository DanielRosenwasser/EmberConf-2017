
import Ember from "ember";

let Person = Ember.Object.extend({
    name: '',
});

let Programmer = Person.extend({
    weaponOfChoice: '',
    explain() {
        let name = this.get('naem');
        let secretWeapon = this.get('weaponOfChoice');

        console.log("Hello, my name is " + name.toLowercase() + "and I use " + secretWeapon);
    },
});

export let MyReduxProgrammer = Programmer.create({
    name: 'Tom',
    weaponOfChoice: 'Array#filter'
})

MyReduxProgrammer.explain();

MyReduxProgrammer.get('weaponOfChoice')