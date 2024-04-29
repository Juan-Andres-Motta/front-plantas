import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { TableComponent } from './table.component';
import { PlantaService } from '../../services/planta.service';
import { Observable, of } from 'rxjs';
import { PlantaModel } from '../../models/planta';

describe('TablaComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;
  let mockPlantaService: {
    getPlants: {
      and: {
        returnValue: (arg0: Observable<PlantaModel[]>) => void;
      };
    };
  };

  beforeEach(async () => {
    let plantas = [
      new PlantaModel(
        1,
        'Lengua de vaca',
        'Sansevieria Trifasciata',
        'Interior',
        140,
        'Templado, cálido',
        'Tierra orgánica con buen drenaje, arena, cascarilla de arroz'
      ),
      new PlantaModel(
        2,
        'Chachafruto',
        'Schefflera actinophylla',
        'Exterior',
        1000,
        'Todos',
        'Sustrato para huerto'
      ),
      new PlantaModel(
        3,
        'Espatifilo',
        'Spathiphyllum Wallasii',
        'Interior',
        65,
        'Templado, cálido',
        'Tierra orgánica'
      ),
    ];
    mockPlantaService = jasmine.createSpyObj('PlantaService', ['getPlants']);
    mockPlantaService.getPlants.and.returnValue(of(plantas));
    await TestBed.configureTestingModule({
      imports: [TableComponent, HttpClientModule],
      providers: [{ provide: PlantaService, useValue: mockPlantaService }],
    }).compileComponents();

    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    component.plants = plantas;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create a table with 4 rows', () => {
    const table = fixture.nativeElement.querySelector('table');
    const rows = table.querySelectorAll('tr');
    expect(rows.length).toBe(4);
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
