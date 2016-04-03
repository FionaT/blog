title:  Sicily 1151 魔板
date: 2013-10-26 20:38:03
tags: Algorithm
category: Algorithm
---
**解题思路**
-------------
是要在规定的步数内找到是否能符合目标状态的魔板操作。
因为有步数的限制，所以我们选择广搜而不是深搜，
深搜可能可以找出答案，但是时间复杂度太高了。
<!--more-->

首先，我先建立一个Node结构体来作为BFS访问的节点，这个结构体里面需要包含整型变量id，visited,step,其中变量id来便于高效访问节点并且节省空间，变量visited用来判断该节点是否被访问过，step变量用来判断已走的步数是否已经超过最大步数限制；还包含字符串型变量present来存放当前魔板的状态；最后包含存有char类型的向量record来记录魔板变换的路径，便于输出时使用。

然后按照Input的要求对应建立输入数据的方式，输入了目标状态和限制步数之后，把数组形式的目标状态以及初始状态转换成字符串类型，便于进行康托编码。把初始状态进行康托编码，或许相应的id号，在Node数组里对应id号的位置存入相关数据（id, visited, step等），然后进行BFS搜索，按照A操作（上下行互换），B操作（每次以行循环右移一个）,C操作（中间四小块顺时针转一格）三个方向进行宽度优先遍历访问，如果步数超过了最大步数限制，则失败，如果找到目标节点，则输出结果。
	
这里需要注意的除了BFS遍历思想以及康托编码以外，比较需要强调的是A操作B操作和C操作三方向遍历的思想，这三种操作是对每个状态都要做的，类似于三方向发散遍历。当时理解的时候花费了一些时间。


**数据结构**
-------------
队列Queue： 实现方法是c++的STL队列。


**核心算法**
-------------
**BFS宽度优先搜索：**
1.	将初始状态放入队列.
2.	拿到队列中的首状态（第一个元素），从队列中pop出首状态。
3.	拿首状态跟目标状态比较，如果相等停止，否则对其分别进行A、B、C三种操作，
    把得到的新状态依次放入队列。
4.	只要队列不为空，重复操作2。


**康托编码：**
在这道算法题目里面我们为了快速高效地访问节点而使用了康托编码给每个节点创建了一个唯一的id，每次判重都通过比较id来完成。

百度百科中对康托展开是这样解释的——{1,2,3,4,...,n}表示1,2,3,...,n的排列，如 {1,2,3} 按从小到大排列一共6个：123 132 213 231 312 321，代表数字 1 2 3 4 5 6，也就是把10进制数与一个排列对应起来，他们间的对应关系可由康托展开来找到。简单的说就是求一个排列数在所有排列中是第几小的。当然，要实现这个功能，途径有很多，比如我们把所有的排列都找出来，然后排个序，二分查找。

德国数学家康托发现其实可以又更简单高效的算法来解决这个问题：例如我们求35412在{1，2，3，4，5}的生成的排列中是第几小的：
第一位 是3，第一位比3小的排列数肯定小于35412，比3小的有1，2；共2个数，所以有2*4！；
第二位是5，同理，比5小的有1，2，3，4；因 为3已经在前面出现了，所有还有3个比5小的，3*3！；
第三位是4，比4小的有1，2，3；3在前面出现了，还有2个比4小的数，2*2！；
第四位是1，没有比1小的数，所以是0*1！；

最后一位无论是几，比它小的数在前面肯定都出现了，所以有0*0！；
所以，比35412小的 排列数共有：2*4！+3*3！+2*2！+0*1！+0*0！=70，35412是第71小的数。需要注意的是进行编码的是集合，不允许有重复的元素。


**源代码**
-------------

```
/*
 * 宽度优先搜索遍历
 * 康托编码判断节点访问是否重复
 *
 */

#include <iostream>
#include <string>
#include <queue>
#include <vector>
#include <stdlib.h>

using namespace std;

struct Node	//结构体的节点
{
    int id;
    int visited;
    int step;
    string present;	//记录当前魔板状态
    vector<char> record; //记录魔板移动路径
}node[500000];

queue<int> q;

void initial( Node &node );
int factorial( int x );
int cantorCode( string line );	//康托编码的函数
void operateA( string line, int lastId ); //三种魔板移动操作
void operateB( string line, int lastId );
void operateC( string line, int lastId );

int main()
{   
    int step;
    
    while( cin>>step && step != -1 ) //读取步数的限制
    {
        for( int i = 0; i < 50000; i++ )
            initial( node[ i ] );    
    
        while (!q.empty())	
            q.pop();
        
        int input[ 8 ];	//存目标状态的数组
        string goal, present, hold;
        int id;
        
        for( int i = 0; i < 8; i++ )
        {
            cin>>input[ i ];
            goal += input[ i ] + '0';//把数组转变成string类型的goal
        }
        
        for( int i = 0; i < 4; i++ )//把数组转变成string的初始状态present
        {							//第一排
            input[ i ] = i + 1;
            present += input[ i ] + '0';
        }
        
        int value = 8;
        
        for( int i = 4; i < 8; i++ )//把数组转变成string的初始状态present
        {							//第二排
            present += value + '0';
            value--;
        }
   
        id = cantorCode( present );//把初始状态进行康托编码，获取对应id
        
        node[ id ].present = present;//把初始状态创建成节点
        node[ id ].visited = 1;
        q.push( id );				//初始节点入队列，便于BFS遍历
        
        while( !q.empty() )			//BFS遍历
        {
            id = q.front();
        
            if( node[ id ].present == goal )
            {
                if( node[ id ].step <= step )//如果超过最大步数限制则显示失败
                {
                    cout<<node[ id ].step<<" ";
                    for( int i = 0; i < node[ id ].step; i++ )
                        cout<<node[ id ].record[ i ];
                        
                    cout<<endl;
                }
                else
                    cout<<"-1"<<endl; //失败提示      
            }            
            hold = node[ id ].present;	//BFS遍历
            operateA( hold, id );
            hold = node[ id ].present;
            operateB( hold, id );
            hold = node[ id ].present;
            operateC( hold, id );
            
            q.pop();            
        }          
    }   
    system("pause");
    return 0;
}

void initial( Node &node )	//初始化节点函数
{
    node.visited = 0;
    node.step = 0;
}

int factorial( int x )		
{
    int sum = 1;
    
    if( x == 0 )
        return 1;
    else  
    {
        for( int i = 1; i <= x; i++ )
        {
            sum *= i;
        }
    }
    
    return sum;
}

int cantorCode( string line )	//康托编码函数 
{
    bool used[ 10 ];    
    int id = 0;
    
    for( int i = 0; i < line.size(); i++ )
        used[ i ] = false;
        
    for( int i = 0; i < line.size(); i++ )
    {
        for( int j = 1; j < line[ i ] - '0'; j++ )
        {
            if( !used[ j ] )
                id += factorial( line.size() - 1 - i );
        }
        
        used[ line[ i ] - '0' ] = true;
    }
    
    return id;
}

void operateA( string line, int lastId ) 	//魔板变换操作A
{
    string temp = line;
    
    
    for( int i = 0, j = 4; i < 4, j < 8; i++, j++ )    
        line[ i ] = temp[ j ];
        
    for( int i = 0, j = 4; i < 4, j < 8; i++, j++ )    
        line[ j ] = temp[ i ];   
        
    int id = cantorCode( line ); 
    
    if( node[ id ].visited == 0 )
    {
        node[ id ].present = line;
        node[ id ].visited = 1;
        node[ id ].step = node[ lastId ].step + 1;
        node[ id ].record = node[ lastId ].record;
        node[ id ].record.push_back( 'A' );
        
        q.push( id ); 
    }
     
} 
     
void operateB( string line, int lastId ) 	//魔板变换操作B
{
    string temp = line;
    
    for( int i = 1; i <= 3; i++ )
        line[ i ] = temp[ i - 1 ];
    for( int i = 5; i <= 7; i++ )
        line[ i ] = temp[ i - 1 ]; 
        
    line[ 0 ] = temp[ 3 ];
    line[ 4 ] = temp[ 7 ];   
        
    int id = cantorCode( line ); 
    
    if( node[ id ].visited == 0 )
    {
        node[ id ].present = line;
        node[ id ].visited = 1;
        node[ id ].step = node[ lastId ].step + 1;
        node[ id ].record = node[ lastId ].record;
        node[ id ].record.push_back( 'B' );
        
        q.push( id ); 
    }
     
}
 
void operateC( string line, int lastId ) 	//魔板变换操作C
{
    string temp = line;
    
    line[ 1 ] = temp[ 5 ];
    line[ 2 ] = temp[ 1 ];
    line[ 5 ] = temp[ 6 ];
    line[ 6 ] = temp[ 2 ];
        
    int id = cantorCode( line ); 
    
    if( node[ id ].visited == 0 )
    {
        node[ id ].present = line;
        node[ id ].visited = 1;
        node[ id ].step = node[ lastId ].step + 1;
        node[ id ].record = node[ lastId ].record;
        node[ id ].record.push_back( 'C' );
        
        q.push( id ); 
    }
}
```