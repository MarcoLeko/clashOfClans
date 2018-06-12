export class FilterModel {
  public selectedLocationId: string;
  public selectedWarFrequency: string;
  public selectedClanLevel: number;
  public selectedMinimumMember: number;
  public selectedMaximumMember: number;
  public selectedClanNameOrClanTag: string;

  constructor(selectedLocationId: string, selectedWarFrequency: string, selectedClanLevel: number, selectedMinimumMember: number, selectedMaximumMember: number, selectedClanNameOrClanTag: string) {
    this.selectedLocationId = selectedLocationId;
    this.selectedWarFrequency = selectedWarFrequency;
    this.selectedClanLevel = selectedClanLevel;
    this.selectedMinimumMember = selectedMinimumMember;
    this.selectedMaximumMember = selectedMaximumMember;
    this.selectedClanNameOrClanTag = selectedClanNameOrClanTag;
  }
}
