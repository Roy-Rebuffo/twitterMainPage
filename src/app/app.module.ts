import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { TweetBoxComponent } from './tweet-box/tweet-box.component';
import { FeedComponent } from './feed/feed.component';
import { PostComponent } from './post/post.component';
import { WidgetsComponent } from './widgets/widgets.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    TweetBoxComponent,
    FeedComponent,
    PostComponent,
    WidgetsComponent,
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
