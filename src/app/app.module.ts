import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ItemListComponent } from './item-list/item-list.component';
import { MediaShowcaseComponent } from './media-showcase/media-showcase.component';
import { ButtonComponent } from './utils/button/button.component';
import { PostItemComponent } from './utils/card/post-item/card-item.component';
import { CardHeadingComponent } from './utils/card/card-heading/card-heading.component';
import { MediaPostCardComponent } from './utils/card/media-post-card/media-card.component';
import { CardComponent } from './utils/card/card.component';
import { SearchBarComponent } from './utils/search-bar/search-bar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    ItemListComponent,
    SearchBarComponent,
    CardComponent,
    MediaPostCardComponent,
    CardHeadingComponent,
    PostItemComponent,
    ButtonComponent,
    MediaShowcaseComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
