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