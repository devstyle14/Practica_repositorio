
const { createApp } = Vue
      
        createApp({
            data() {
                return {
                    estudiante: [2,4,7],
                    nombres: '',
                    id: ''
                                            
                }

            },
            methods:{
                aumentar(){
                    this.estudiante.push(this.nombres)
                },
                borrar(){
                    let contenido = this.estudiante.length
                    for(i=0;i<contenido;i++){
                        if(i == this.id){
                            this.estudiante.splice(i,1)
                        }
                    }

                },
                editar(){
                    let contenido = this.estudiante.length
                    for(i=0;i<contenido;i++){
                        if(i == this.id){
                            this.nombres = this.estudiante[i]
                                                                       
                        }
                        
                    }
                   


                },
                guardar(){
                    
                    this.estudiante.splice(this.id,1,this.nombres)
                }
             
            }
        }).mount('#app')

