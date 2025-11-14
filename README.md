# Intelligent-Traffic-Management-System
A comprehensive web-based traffic management system that utilizes advanced graph algorithms to optimize emergency vehicle routing in urban environments. This project demonstrates real-world application of Data Structures &amp; Algorithms for solving critical city planning challenges.

--> Features :-
  1) Network Visualization :-
      Interactive Graph: Real-time visualization of city traffic network
      Color-coded Nodes:
       🔴 Emergency Stations (5 locations)
       🔵 Major Landmarks (10 locations)
       🟡 Source Points
       🟣 Destination Points
       🟢 Optimal Paths
      Dynamic Updates: Live highlighting of calculated routes

 2)  Route Planning Algorithms :-
        Dijkstra's Algorithm - Single source shortest path
        All Possible Routes - Paths from source to all destinations
        Floyd-Warshall - All-pairs shortest paths
     
 3)  Algorithms Implemented :-
        Dijkstra's Algorithm
            Time Complexity: O((V + E) log V)
            Use Case: Single source to single destination shortest path
            Features: Returns path, total time, and road names

        All Possible Routes
          Use Case: Find paths from source to all other nodes
          Output: Reachability analysis and route previews

        Floyd-Warshall Algorithm
          Time Complexity: O(V³)
          Use Case: All-pairs shortest paths
          Output: Complete distance matrix
