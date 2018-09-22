import { Component, OnInit, Input } from '@angular/core';

import { FeedbackViewModel } from '../../../core/models/view-models/feedbacks/feedback.view.model';
import { FeedbackService } from '../../../core/services/feedbacks/feedback.service';

@Component({
  selector: 'app-feedbacks-all',
  templateUrl: './feedbacks-all.component.html',
  styleUrls: ['./feedbacks-all.component.css']
})
export class FeedbacksAllComponent implements OnInit {
  @Input()
  courseId: string;
  feedbacks: Array<FeedbackViewModel>;

  constructor(private feedbackService: FeedbackService) {}

  ngOnInit() {
    // console.log(this.courseId);
    this.feedbacks = this.feedbackService.getByCourse(this.courseId);
  }
}
