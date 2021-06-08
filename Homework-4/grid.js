export class Grid {
    constructor(options) {
        this.rootId = options.rootId;
        this.nbOfRows = options.nbOfRows;
        this.nbOfCells = options.nbOfRows;
        this.rowClass = options.rowClass;
        this.cellClass = options.cellClass;
        this.gridContainer = document.getElementById(this.rootId);
        this.currentPlayedRow = 0;
        this.isPlaying = false;
        this.cells = [];
    }

    init(){
        this.draw();
    }

    startPlaying(playBtn){
        this.currentPlayedRow = 0;
        playBtn.innerHTML = 'Stop';
        this.isPlaying= true;
        this.play();

    }

    stopPlaying(playBtn){
        playBtn.innerHTML = 'Play';
        this.isPlaying = false;
    }

    draw(){
    for(let i = 0; i<this.nbOfRows; i++){
        const row = document.createElement('div');
        row.classList.add(this.rowClass);
            this.addCellsToRow(row);
            this.gridContainer.append(row);
        }
    }

    toggleCellState(cell){
        cell.classList.toggle('active');
    }

    addCellsToRow(row){
        for(let j=0; j<this.nbOfCells; j++){
            const cell = document.createElement('div');
            cell.classList.add(this.cellClass);
            
            cell.addEventListener('click', () => {
                this.toggleCellState(cell);
            });
            //cand mouse-ul este apasat(tras) incontinuu peste celule
            cell.addEventListener('mouseenter', () => {
                if(this.isMouseDown)  this.toggleCellState(cell);
            })
            this.cells.push(cell);
            row.append(cell);
            }
    }
    addGestureCell(className) {
        const row = this.gridContainer.getElementsByClassName(this.rowClass)[this.currentPlayedRow];

        if(row.getElementsByClassName('gesture-cell').length > 4) return;
        const gestureCell = document.createElement('div');
        gestureCell.classList.add(this.cellClass);
        gestureCell.classList.add('gesture-cell');
        gestureCell.classList.add(className);
        gestureCell.addEventListener('click', () => {
            gestureCell.remove();
        });
        row.append(gestureCell);
    }
    changeBackground(className) {
        let square = document.getElementsByClassName('square');
        square.classList = '';
        square[0].classList.add(className);
    }
}