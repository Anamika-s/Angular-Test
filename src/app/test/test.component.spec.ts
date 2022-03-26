import { ComponentFixture, TestBed } from '@angular/core/testing';
 

import { TestComponent } from './test.component';

describe('TestComponent', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe("Test Suite 2" , ()=>
{
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
 
  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("Test Case 1" , ()=>
  {
    console.log("This is my first test case");
  })

  it("Test Case 2" , ()=>
  {
    expect("10").toBe("20");
  })

  it("Check whether msg has Hello or not" , ()=>
  {
    // const fixture = TestBed.createComponent(TestComponent);
    // const app = fixture.componentInstance;
  
    expect(component.msg).toBe("hello");
  })
  it("Test sum method , shud return 30" , ()=>
  {
    // const fixture = TestBed.createComponent(TestComponent);
    // const app = fixture.componentInstance;
  
    expect(component.sum(10,20)).toBe(30);
  })

  it('Test html element', ()=>
  {
    const collection = fixture.nativeElement;
expect(collection.querySelector(".user").textContent).toContain("head");

  })

  it('Testing private method', ()=>
  {  
     expect("1").toBe(component['test1']());
  
    })
})


// AAA
// A > Arrange
// A => Act
// A > Assert



