import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { TableComponent } from './table.component';
import { PlantaService } from '../../services/planta.service';
describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableComponent, HttpClientModule],
      providers: [PlantaService],
    }).compileComponents();

    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create a table', () => {
    const fixture = TestBed.createComponent(TableComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('table')).toBeTruthy();
  });

  it('should have a first row with name #', () => {
    const fixture = TestBed.createComponent(TableComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('table')?.textContent).toContain('#');
  });

  it('should have a first row with name Nombre común', () => {
    const fixture = TestBed.createComponent(TableComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('table')?.textContent).toContain(
      'Nombre común'
    );
  });

  it('should have a first row with name Tipo', () => {
    const fixture = TestBed.createComponent(TableComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('table')?.textContent).toContain('Tipo');
  });

  it('should have a first row with name Clima', () => {
    const fixture = TestBed.createComponent(TableComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('table')?.textContent).toContain('Clima');
  });

  it('should have a span with outside plants', () => {
    const fixture = TestBed.createComponent(TableComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('span')?.textContent).toContain(
      'Total de plantas de exterior:'
    );
  });

  it('should have a span with inside plants', () => {
    const fixture = TestBed.createComponent(TableComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(
      compiled.querySelector('div.mt-10 > div:nth-of-type(2)')?.textContent
    ).toContain('Total de plantas de interior:');
  });
});
