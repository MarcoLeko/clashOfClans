import {animate, AnimationTriggerMetadata, state, style, transition, trigger} from '@angular/animations';

export const pulse: AnimationTriggerMetadata = trigger('pulseAnimation', [
  state('small', style({
    transform: 'scale(1)'
  })),
  state('large', style({
    transform: 'scale(1.2)'
  })),
  transition('small <=> large', animate('235ms ease-in')),
]);
