 const INF = Number.MAX_SAFE_INTEGER;

        class Node {
            constructor(id, name, type) {
                this.id = id;
                this.name = name;
                this.type = type;
            }
        }

        class Edge {
            constructor(to, weight, roadName) {
                this.to = to;
                this.weight = weight;
                this.roadName = roadName;
            }
        }
        class HeapNode {
            constructor(vertex, distance) {
                this.vertex = vertex;
                this.distance = distance;
            }
        }

        class MinHeap {
            constructor() {
                this.heap = [];
            }

            push(vertex, distance) {
                this.heap.push(new HeapNode(vertex, distance));
                this.bubbleUp(this.heap.length - 1);
            }

            pop() {
                if (this.heap.length === 0) return null;
                if (this.heap.length === 1) return this.heap.pop();

                const min = this.heap[0];
                this.heap[0] = this.heap.pop();
                this.bubbleDown(0);
                return min;
            }

            bubbleUp(index) {
                while (index > 0) {
                    const parentIndex = Math.floor((index - 1) / 2);
                    if (this.heap[index].distance >= this.heap[parentIndex].distance) break;
                    [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
                    index = parentIndex;
                }
            }

            bubbleDown(index) {
                while (true) {
                    let minIndex = index;
                    const leftChild = 2 * index + 1;
                    const rightChild = 2 * index + 2;

                    if (leftChild < this.heap.length && this.heap[leftChild].distance < this.heap[minIndex].distance) {
                        minIndex = leftChild;
                    }
                    if (rightChild < this.heap.length && this.heap[rightChild].distance < this.heap[minIndex].distance) {
                        minIndex = rightChild;
                    }
                    if (minIndex === index) break;

                    [this.heap[index], this.heap[minIndex]] = [this.heap[minIndex], this.heap[index]];
                    index = minIndex;
                }
            }

            isEmpty() {
                return this.heap.length === 0;
            }
        }
        class PathInfo {
            constructor() {
                this.path = [];
                this.totalTime = INF;
                this.roads = [];
            }
        }

class TrafficGraph{
 constructor(numVertices){
  this.numVertices = numVertices;
  this.nodes = [];
  this.adjacencyList = {}
  this.nameTold = {};
 }

addVertex(id,name,type){
 this.nodes.push(new Node(id,name,type));
 this.nameTold[name] = id;
 this.adjacencyList[id] = [];
}

addEdge(from,to,weight,roadName){
 this.adacencyList[from].push(new Edge(to,weight,roadName));
this.adjacencyList[to].push(new Edge(from,weight,roadName));
}

dijkstra(source,destination){
 const distance = new
Array(this.numVertices.).fill(INF);
 const parent = new
Array(this.numVertices).fill(-1);
 const roadUsed = new
Array(this.numVertices.fill("");
 const minHeap = new MinHeap();

 distance[source] = 0;
 minHeap.push(source,0);

 while(!minHeap.isEmpty()){
  const current = minHeap.pop();
  const u = current.vertex;

  if(current.distance > distance[u])
   continue;

  for (const edge of this.adjacencyList[u]){
   const v = edge.to;
   const weight = edge.weight;

   if(distance[u] +weight<distance[v]){
    distance[v]=distance[u]+weight;
    parent[v] = u;
    roadUsed[v]=edge.roadName;
    minHeap.push(v,distance[v]);
   }
  }
 }
  

 
 
