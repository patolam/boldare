import {NgModule} from '@angular/core';
import {MatButtonModule, MatFormFieldModule, MatInputModule} from '@angular/material';

@NgModule({
    declarations: [],
    imports: [
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule
    ],
    exports: [
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule
    ],
})
export class MaterialModule {
}
