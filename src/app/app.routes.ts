import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CharactersComponent } from './characters/characters.component';
import { AboutComponent } from './about/about.component';
import { CharacterComponent } from './character/character.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CharacterFormComponent } from './character-form/character-form.component';

export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'characters',
        component: CharactersComponent
    },
    {
        path: 'character/:id',
        component: CharacterComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'character-form',
        component: CharacterFormComponent
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: '404',
        component: NotFoundComponent
    },
    {
        path: '**',
        redirectTo: '404'
    }
];
