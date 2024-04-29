import Swal from 'sweetalert2'

// import 'sweetalert2/src/sweetalert2.scss'

export class AlertHelper {

  static info(title: string, text: string){
    Swal.fire({
      title,
      text,
      icon: 'info',
    });
  }

  static error(title: string, text: string){
    Swal.fire({
      title,
      text,
      icon: 'error',
    });
  }

  static yesOrNot( title: string, text: string, next: Function ){
    Swal.fire({
      title,
      text,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si"
    }).then((result) => {
      if (result.isConfirmed) {
        next();
      }
    });
  }
}
